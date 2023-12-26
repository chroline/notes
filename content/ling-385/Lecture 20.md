# Transformer/LLM General Structure

- neural network takes a vector ⇒ creates a new better representation which is better at solving the problem at hand
- LLMs have hundreds/thousands of NNs, each of which produce a better representation

![Image.png](Lecture%2020.assets/Image.png)

- each element of Ensemble has 3 NNs: Q, K, V
- gradually, from one Encoder to another, the vectors are moved around to become
more like the distances in the hierarchical/structural distances

# LLMs are Loss Minimization (Error-based) Learners

- BERT: give the LLM a sentence, eliminate one or more of the words, and ask the LLM to guess the missing words
- GPT: give the LLM a sequence of words, ask the LLM to guess the next word
   - 1) pick a sentence from wikipedia; 2) pick a random (nth) word; 3) goal of GPT system is to predict n+1th word
- how can GPT predict a word from other words?
   - ::must know the relationship of words in the sentence::
   - ::hierarchical structure::

# What GPT accomplishes (approx)

![Image.png](Lecture%2020.assets/Image%20(2).png)

- input to GPT is a sentence
- each word is represented by a vector
   - word vector = embedding vector + positional encoding
- vectors have distances from each other that represent semantic similarity
   - distances don't have anything to do with hierarchical/structural distances
- ::job of the Q, K, V NN's to learn tree structure::

# How GPT gets structure (approx)

1. input vectors
2. for each word, use Q NN to get new q vector representation (same with k and v)
3. combine q_n with all other k's, and combine that with v_n
- crucial step to changing the location of each word's vector = relating it to others
- ::this is "attention" mechanism::
   - effectively an associative memory

