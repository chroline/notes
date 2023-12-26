# Why is the Correlation Matrix Memory we developed not so great?

1. it learns too fast
   - when you learn a foreign language, it takes a long time
   - we learn gradually/iteratively
   - in designing an AI, we need to get it to learn a bit at a time from what it observes
1. the neurons are all synchronous
   - neural firing in brains is asynchronous
   - at some random time, some neuron updates, and at some other moment, a different one
updates, etc
1. lack of variety in training data
   - requires enormous amounts of varied data

# Neural Activation

- neurons are either on or off
- ::however, when neurons fire, they can turn on and off a lot in some amount of time, or they can turn on and off a little bit::
- ::activation = frequency of on/off switching in a neuron::
   - with each neuron we will associate a number *a* for its activation

# Neural Activation Dynamics

- How does a neuron's activation change with time?
   - that is, what is a/dt? (rate of change of a with respect to time)
- if a/dt is a big positive number it says that a is growing by a lot
- if a/dt is a small positive number it says that a is growing by a little
- if a/dt is a big negtive number it says that a is decreasing by a lot
- if a/dt is a small negative number it says that a is decreasing by a little

# Improving Learning by making it gradual

- humans learn in a process involving knowledge acquisition and adaptation
   - noticing something new and adjusting our existing knowledge accordingly
- Hebbian learning focuses on adjusting the weight of a connection based on the activations of connected neurons
- if too-fast learning (as in the correlational memory matrix), the weight is set immediately based on observed neuron activations
- ::alternatively, Hebbian learning is a gradual process using current weight (w_t) and a small part of what needs to be learned::
   - update in weight w_t+1 is based on the current weight w_t and a fraction of the learning requirement
- ::gradient descent is the incremental adjustment in the learning process.::

# Improving Recognition

- instead of updating all the neurons at once, we will do the following:
   - if, for instance we have 5 neurons
      1. Pick a random number between 1 and 5, let’s say we get 4
      2. Update the 4th neuron’s value
- this leads to an "asynchronous algorithm"
   - closer match to how brains work

