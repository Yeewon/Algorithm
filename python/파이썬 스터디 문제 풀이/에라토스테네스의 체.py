def sieve(n):
    is_prime = [False, False] + [True] * (n - 1)
    for candidate in range(2, n-1):
        if not is_prime[candidate]:
            continue
        for multiple in range(candidate*candidate, n+1, candidate):
            is_prime[multiple] = False

    return [number for number in range(2, n - 1) if is_prime[number]]