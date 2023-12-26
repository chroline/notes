# Knowledge of a Language

- neural networks need to understand two fundamental aspects of a language like English:
   - knowledge of words, represented as vectors called embeddings.
   - understanding the regularities or patterns within the language.
- embeddings should reflect the similarity between words as perceived by humans.
   - for example, if humans consider words like "a" and "the," or "court" and "ball" similar, their vector embeddings should exhibit similar numerical patterns.
- one-hot embeddings do not capture such similarities effectively
- how can we leverage the regularities in text to enhance the development of word embeddings?

# Embeddings

- words represented by vectors with as many numbers as the vocabulary size.
- vectors are probability distribution functions (pdfs) that sum to 1.
- one-hot encoding occurs when there is a single 1 and all other entries are 0.
- in one-hot encoding, a 1 at the 2000th entry indicates a 100% chance that the word is "cat" if "cat" is the 2000th word in the vocabulary.
- vector with 0s, except for .5 at the 2000th entry and .5 at the 17000th entry, suggests the word is either "cat" or "the," excluding other possibilities.
- word vectors' numbers indicate, for a specific word, which words in the vocabulary it could be.
- vector like [0 0 0 ... .3333 0 0 ... 0 0 0 .6666 ... 0 0 0] implies the word is either of two possibilities with varying certainty.
- another vector, [0 0 0 ... .2 0 0 0 ... .4 0 0 0 0 ... 0 0 0 .3 0 ... 0 0 0 0 .1 0 0 0], represents a more complex distribution of possibilities.
- sum of all numbers in a vector equals 1 or 100% (hence it is a probability distribution function)

# Neural Network that knows grammatical regularity

- NN "knows" English if it has been well-trained
- "the" input implies next word is a noun or adjective
- "should" input implies next word is a verb or adverb
- input encoding for "the" is a one-hot encoding
- expected output for English-knowledgeable NN is a pdf with peaks at nouns and adjectives
- this highlights the impressive nature of the NN's language understanding
   - specifically grammatical and topical regularity

# How to train embedding neural network?

- use a corpus of text for training
- take the first two words, such as "the poet"
- initialize the neural network (NN) with random weights (w) and biases (b)
- randomly select a pair of words from the text, like "the poet"
- input the one-hot encoding (ohe) for the first word, e.g., "the"
- set the desired output as the one-hot encoding for the second word, e.g., "poet"
- process the input word and compute the output
- the computed and desired outputs differ, resulting in a loss
- utilize Stochastic Gradient Descent (SGD) to improve all weights and biases
- randomly select another pair, for instance, "should eat"
- repeat the process: improve weights and biases, continue learning

# How to improve our embeddings?

- different one-hot encodings for "a" and "the" result in different outputs, but they should actually have similar outputs
- we can adjust the learned weights (w’s) and biases (b’s) of the first layer to make activations for "a" and "the" more similar in the hidden layer
   - this will result in similar outputs
- the weights (w’s) and biases (b’s) of the output layer further enhance the similarity of activations in the output layer.
- ::since "a" and "the" generate similar hidden layer activations, these activations can be used as new embeddings.::
- ::after training the neural network, expose it to every word, read off the hidden activations, and use them as new embeddings for each input word.::
- ::20,000 dimensions are reduced to 768, and similar words exhibit similar patterns of numbers::

# LLMs

- LLMs have hundreds of neural networks (NN's) which makes them *large*
- ::the crucial aspect of LLMs is their ability to learn regularities through Loss::
- 2 fundamental approaches for LLMs:
   - BERT: Present the LLM with a sentence, remove one or more words, and have it predict the missing words.
   - GPT: Provide the LLM with, for example, 20 words and task it with predicting the 21st word.

