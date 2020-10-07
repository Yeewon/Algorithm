def GCD(A, B):
    if A%B==0:
        return B
    R = A % B
    return GCD(B, R)

print(GCD(192,162))