import type { Paragraph, Root, Text } from "mdast";
import type { Plugin, Transformer } from "unified";
import { u } from "unist-builder";
import { visit, Visitor, VisitorResult } from "unist-util-visit";

export const REGEX = /(?:==|::)([^=]+)(?:==|::)/g;

export const highlightTextPlugin: Plugin<[any], Root> = () => {
  const constructMarker = (markedText: string | undefined): Paragraph => {
    // https://github.com/syntax-tree/mdast-util-to-hast#example-supporting-custom-nodes
    return {
      type: "paragraph",
      children: [{ type: "text", value: markedText ?? "" }],
      data: {
        hName: "mark",
        hProperties: {
          className: ["bg-yellow-200 px-1 -ml-1 rounded"],
        },
      },
    };
  };

  const visitor: Visitor<Text> = function (node, index, parent): VisitorResult {
    if (!parent) return;

    const children: Array<Text | Paragraph> = [];
    const value = node.value;
    let tempValue = "";
    let prevMatchIndex = 0;
    let prevMatchLength = 0;

    const matches = Array.from(value.matchAll(REGEX));

    for (const match of matches) {
      const mIndex = match.index ?? 0;
      const mLength = match[0].length;

      const textPartIndex = prevMatchIndex + prevMatchLength;

      // If there is a text part before the match
      if (mIndex > textPartIndex) {
        const textValue = value.substring(textPartIndex, mIndex);
        const textNode = u("text", textValue);
        children.push(textNode);
      }

      const [_, markedText] = match;
      const markerNode = constructMarker(markedText);
      children.push(markerNode);

      // Control for the last text node if it exists after the last match
      tempValue = value.slice(mIndex + mLength);
      prevMatchIndex = mIndex;
      prevMatchLength = mLength;
    }

    // If there is still text after the last match
    if (tempValue) {
      const textNode = u("text", tempValue);
      children.push(textNode);
    }

    // Replace the current text node with the new nodes
    if (children.length) parent.children.splice(index!, 1, ...children);
  };

  const transformer: Transformer<Root> = tree => {
    visit(tree, "text", visitor);
  };

  return transformer;
};

export default highlightTextPlugin;
