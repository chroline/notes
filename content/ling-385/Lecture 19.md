- neural networks are for learning better representations

![Image.png](Lecture%2019.assets/Image.png)

# Review: Transformer (LLM) General Structure

- an LLM has many encoders
- each encoder develops better representation thatn the one before
   - ::does so by having ensemble of NNs evaluate information, then combining info from all of them::

---

Languages have two important kinds of structure:

1. hierarchical/tree structure relating words
2. word, i.e., what word comes first.
- ::transformers separate these two kinds of structure::
- ::GPT LLMs predict each word from all previous words::

in order to do so, needs to know:

1. hierarchical relation between each word and each other word
2. position of each word

# Sentence Input to the LLM

1. run one-hot encoding of each word through embedding NN to get embedding vectors
2. calculate positional encoding for each word
3. ::word vector = embedding + positional encoding::
- for LLM to "understand" the sentence, it will pass thru encoder sequences to that better representations are gradually found
   - representations compute relation between each word, regardless of their positions
   - ::this is called syntactic distance::

# Syntactic Distance

- tree siblings are closer than tree cousins, which are closer than second cousings, etc

To find cognitive/syntactic distance:

1. take any two words
2. find the lowest node in the tree that dominates them both
3. measure the number of nodes in the route between the two objects (including lowest node dominating both of them)

## What GPT accomplishes (approx)

- now, imagine that each word has a vector associated with it
- between any two vectors, we can measure the IP
   - IP measures vector distance
- if we can move vectors such that IP increasingly reflects hierarchical distances, vectors represent both words AND syntax trees through interdistances

![Image.png](Lecture%2019.assets/Image%20(2).png)

# Positional Encodings

- each word is represented by a wave
- number of maxima in the wave representing the word order
- discovered by Vaswani et al. (2017), paper at the start of LLMs

![Image.png](Lecture%2019.assets/Image%20(3).png)

