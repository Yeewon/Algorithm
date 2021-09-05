def solution(participants, completions):
    participants.sort()
    completions.sort()
    for participant, completion in zip(participants, completions):
        if participant != completion:
            return participant
    return participants[-1]