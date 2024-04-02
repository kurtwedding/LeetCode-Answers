import java.util.HashMap;

public class IsomorphicStrings {
    public static boolean isIsomorphic(String s, String t) {
        HashMap<Character, Character> memory = new HashMap<Character, Character>(s.length());
        for (int i = 0; i < s.length(); i++) {
            try {
                if (memory.get(s.charAt(i)) == t.charAt(i)) // if the memory already has the letter stored as the correct letter,
                    continue;
                else if (memory.get(s.charAt(i)) != null ) // if the letter is any other letter than the correct one
                    return false;
            } catch(Exception e) { // if the key does not exist in the dict,
                if (memory.values().contains(t.charAt(i))) 
                    return false;
                // store the letter in memory
                memory.put(s.charAt(i), t.charAt(i));
            }
        }
        return true;
    }

    public static void main(String[] args){
        System.out.println(isIsomorphic("foo", "bar"));
    }
}