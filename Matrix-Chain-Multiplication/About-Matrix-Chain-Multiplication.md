
### About Matrix Chain Multiplication
Matrix chain multiplication is a problem in computer science that involves finding the opti-
mal way to multiply a sequence of matrices. The objective is to minimize the number of scalar

multiplications required to compute the product of the matrices. The problem is formulated as
a dynamic programming problem, where the solution is found by breaking down the problem
into smaller subproblems and then using the solutions of the subproblems to compute the final
solution.
Given a sequence of n matrices A1,A2,...,An, where the dimensions of matrix Ai are pi−1 ×
pi for i = 1,2,...,n, the goal is to find the minimum number of scalar multiplications required
to compute the product: AiAi+1...Aj for 1 ≤ i ≤ j ≤ n.
The base case is when i = j, and the product is simply Ai

. Thus, mi,i = 0 for 1 ≤ i ≤ n.
For j > i, the number of scalar multiplications required to compute the product AiAi+1...Aj
can be split into two parts: the left subchain AiAi+1...Ak and the right subchain Ak+1...Aj for
some i ≤ k < j. The total number of scalar multiplications required is the sum of the number

of scalar multiplications needed to compute the left subchain, the number of scalar multiplica-
tions needed to compute the right subchain, and the number of scalar multiplications needed to

multiply the resulting matrices together.
The formula for mi, j

is therefore: m[i,i] = 0 for i = 1,2,...,n

m[i, j] = minm[i, k] +m[k +1, j] + p[i−1]× p[k]× p[ j] for i ≤ k < j
where the base case is when i = j, and the matrix is already multiplied. For i < j, the
minimum number of scalar multiplications required to compute the product of matrices Ai ×
Ai+1 × ··· × Aj can be computed by dividing the product into two sub-products, Ai × Ai+1 ×
···×Ak and Ak+1×Ak+2×···×Aj

, and multiplying them separately before multiplying the two
sub-products. The minimum number of scalar multiplications required for this can be computed
by adding the number of scalar multiplications required for multiplying the two sub-products
and the number of scalar multiplications required for multiplying the two matrices.
The time complexity of the dynamic programming solution is O(n
3

), and the space complex-
ity is O(n

2
), where n is the number of matrices in the sequence. The matrix chain multiplication
problem has many applications in computer science and engineering, such as in optimization
problems, robotics, and computer graphics.
