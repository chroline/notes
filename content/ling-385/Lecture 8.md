# What does a Neural Network (NN) try to do?

- three psychological skills that an NN tries to emulate
mathematically
   1. ability of an animal to have knowledge about its environment
   2. ability of an animal to recognize things in its environment, using
its knowledge
   3. ability of an animal to learn about its environments, thereby a) acquiring knowledge about it and b) being able to recognize those objects
- it is hard to imagine animal life without these three psychological abilities
- the secret power of NN’s is that they are able to capture these three psychological skills using a little more than arithmetic

# Inner Product detects similarity

- Similar means: +’s correspond to +’s, and -’s to -’s, mostly.
- Dissimilar means: Some +’s correspond to +’s, some -’s to -’s, but some +’s correspond to -’s

# Face Recognition Example

- First example: A NN that has knowledge about faces, its environment, can
recognize the faces of different people, assigning them their names
- a face is a table of numbers, the brightness/color of pixels
- NN’s represent a face as a list or vector of numbers
- we can get a list by taking the first row of numbers, following it by the
second row of numbers, etc
- each of your friends then has a vector of numbers representing their face
- if an NN knows the names of your friends, then if we give it a
vector of one of your friends as an input, it will output some number that
represents your friend’s name
- ::recognition: NN is a function that takes an environmental input vector x and spits out a vector memory output::

# Summary

- an object in the environment is represented by an input vector x
- knowledge is represented by a vector W
- recognition is represented by taking the inner product between the W vector and the x vector: <W , x>
- squashing function: if <W , x> < 0, output is 0; else, output is 1
- hence, recognition is a function that uses knowledge, inner-producting its W with input x, and then using a squashing function to output 0 or 1

# Learning with Knowledge

- recognition via inner product with known W's
- in Deep Learning, w's are learned from data in the world
- example with Kiwa and Shri's social media pages and 100 pictures each
- stochastic gradient descent Algorithm used to learn w's
- learning process:
   1. initialize w's with random numbers
   2. present a picture of Shri to the neural network (NN)
   3. desired output is 1 for Shri
   4. perform inner product between Shri pic and random w's
   5. if output is not 1, calculate Error/Loss
   6. adjust w's to reduce Loss

