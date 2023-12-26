# Embeddings and Regularity

- two main steps in applying AI to different domains (language, images, speech, protein structure):
   1. Embedding
   2. Regularity
- example of embedding in the context of assigning names to faces:
   - convert images into vectors for processing by neural networks (NNs)
   - ::embedding involves translating cognitive objects into sequences of numbers::
- ::recognition of faces by NNs involves learning regularities:::
   - regularities are distinguishing features (e.g., sizes of face parts, inter-distances, and curvature)
- current neural networks, like ChatGPT, extract distinct regularities from language
- ::for language application, we need to translate words into vectors using an Embedding Neural Network::

# One-hot Encodings

- imagine we're designing an NN for English language processing
   - utilizing vast amounts of text data from NYT, WSJ, and Wikipedia for learning
- we have to convert words into vectors to introduce English to the neural network
   - approximately 20,000 vocabulary items with repetitions
- we will alphabetically order the vocabulary, ranging from "a" to "Zulu"
- each word represented by a vector with 20,000 entries
- ::one-hot encoding: the n'th word represented by a vector with 19999 0’s and one 1 in the n'th position::
   - example: "a" represented as [1 0 0 0...]
   - example: "Zulu" represented as [0 0 0 0...1]
- we have now solved problem of representing words with numbers

# Embeddings

- word vectors have 20,000 entries, with a single 1 indicating alphabetical order.
   - example: "cat" may have a 1 at around 2000, and "the" at 17000.
- encoding interpretation for "cat": "I’m 100% sure this word is the 2000th in your list!"
   - vector with non-zero entries at 2000 and 17000: Indicates the word is either "cat" or "the."
- numbers in a word vector identify the word's position in the vocabulary.
- example vector [0 0 ... .3333 0 ... .6666... 0]
   - indicates the word is one of two with varying certainty.
- ::probability distribution function (pdf): set of numbers that sums to 1.::
   - ::one-hot encoding is a pdf with absolute certainty for one word.::

# Regularity in language

- NNs excel at learning and utilizing three types of language regularity:
   1. Grammatical regularity
   2. Topical regularity
   3. Cause-Effect regularity

# Grammatical Regularity

- ex: If saying "the"
   - nouns and adjectives are likely to follow
- ex: If saying "may"
   - verbs and adverbs are likely to follow
- ::all languages exhibit grammatical regularity.::
- grammatical regularities in English involve types of words that can follow others
   - in other languages like Turkish, words can follow each other freely, but morphemes have a strict order.
- ::an NN "knows" English if it understands these regularities, ensuring coherent sentence production.::

# Topical Regularity

- if I say “lawyer”, what other words are likely to be within 10 words before or after?
   - Legal discourse type words
- many nouns and verbs in a language have a whole set of words that regularly occur with them in the same topic
   - ::associating certain words with one another is topical regularity::
- very important aspect of a language for an NN to know

# Cause-Effect or Inferrential Regularity

- language involves creating coherent and cohesive discourses
- ::consideration of cause and effect is crucial for connecting sentences logically::
- for example, if the statement is "It will rain tomorrow," subsequent sentences may indicate effects
   - linguistic indicators of such regularity include words like "so," "therefore," "but," "cause," "make," "let," and more
- ::hence, coherence of language relies on knowledge about the world.::

# Learning Regularities

- children learn language regularities without explicit instruction
- environments offer linguistic and non-linguistic data for children to learn from
- children grasp regularities in language within a few years
- AI learns regularities from language data
- some AIs learn from text and images simultaneously
   - similar to rich learning environments for children
- how do these AI systems learn regularities?

# Learning Grammatical Regularities and better embeddings

- words are represented by vectors of 20,000 numbers, indicating their likelihood among the 20,000 possible words
- two major problems with these representations:
   - the vectors are very long, with each word represented by 20,000 numbers.
   - similar words (i.e. "the" and "a") are dissimilar numerically.
- computers handle numbers easily, but the length of the vectors is somewhat wasteful
- similar words, such as "the" and "a," should have similar vector representations, but currently, they are dissimilar numerically
   - ::inner product is introduced as a method to measure vector similarity::
   - IP of the vectors for "the" and "a" is 0, indicating dissimilarity
   - ::since "the" and "a" should be followed by similar words, better vector representations are needed::

# Embedding Neural Network

- predicting the next word involves anticipating nouns and adjectives when given a starting word
- learning process includes the following steps:
   - receive the one-hot encoding for the given word, e.g., "cat" as [0 0 0 ... 1 .... 0 0 0 0].
   - inner product these numbers with weights for each neuron and add bias.
   - apply the sigmoid function to each hidden neuron, producing values between 0 and 1.
   - another layer of processing occurs, leading to the calculation of output activations.
- ::a well-trained embedding NN with optimal weights (w's) and biases (b's) should exhibit peaks in output corresponding to expected types of words to follow::
   - NN receives different one-hot encodings (ohe’s) for "the" and "a"
   - previously learned weights (w’s) and biases (b’s) remain unchanged
   - output vectors should peak at nouns and adjectives
   - same w’s and b’s produce the same outputs for different input vectors
   - ::hence, internal activations should be consistent despite different input vectors::

