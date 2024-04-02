
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        memory = dict()
        for i in range(0, len(s)):
            try: # try to read the key of the first letter
                if memory[s[i]] == t[i]: # if the memory already has the letter stored as the correct letter,
                    continue
                elif memory[s[i]] is not None: # if the letter is any other letter than the correct one
                    return False
            except: # if the key does not exist in the dict,
                if t[i] in memory.values():
                    return False

                # store the letter in memory
                memory[s[i]] = t[i]
        return True
    
    if __name__ == "__main__":
        print(isIsomorphic("add", "foo", "bar"))