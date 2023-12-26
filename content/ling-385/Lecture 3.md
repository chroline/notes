# Moving a step closer to the Hopfield Neural Network

- ::one of the main parts of the Hopfield model of associative memory is the idea that there is a dynamical process of convergence to a memory::
- our proposed model only works for remembering numbers
- what if we want to remember patters, images, or eventually words?
- we first need to understand how to model different kinds of numerical data, so we will start with that

# Scalar, Vector, Matrix

- a scalar is just a single number
- a pattern of numbers is called a vector
   - can be expressed as a row or a column
- a table of numbers (with rows and columns) is called a matrix

# Memory Model 2

- to "remember" a pattern (vector of size n), multiply the column by the row
   - you will get a nxn matrix
- claim is that this is a mathematical model of the memory for a pattern
   - take any column vector with three numbers
   - multiply the matrix by the vector
   - the resulting vector will mirror the pattern of the original vector
      - not the same numbers, but the same pattern (i.e. up-down-up, down-down-up, etc)
- ::column-row multiplication is learning, matrix-column multiplication is recall::

