public class ValidParenthesisString {

    public static boolean checkValidString(String s){
        int leftParenthesesCount = 0, rightParenthesesCount = 0, starCount = 0;
        for(int i = 0; i < s.length(); i++){
            if(s.charAt(i) == '(') leftParenthesesCount++; // if there is a ( add to the count
            else if(s.charAt(i) == ')') rightParenthesesCount++; // if there is a ) take 1 from the count
            // if the count is 0, there is an equal number of ('s and )'s
            else if(s.charAt(i) == '*') starCount++; // this can be counted as a ( or )
            if(leftParenthesesCount + starCount < rightParenthesesCount) return false; // if at any time the possible number of open brackets is less than the closing ones, return false
        }

        // doing the same thing backwards for edge cases
        int tempA = 0,  tempB = 0, tempStar = 0;
        for(int i = s.length()-1; i >= 0; i--){
            if(s.charAt(i) == ')') tempA++;
            else if(s.charAt(i) == '(') tempB++;
            else if(s.charAt(i) == '*') tempStar++;
            if(tempA + tempStar < tempB) return false; // if at any time the possible number of closed brackets is less than the opening ones, return false
        }

        System.out.println(leftParenthesesCount + ", " + rightParenthesesCount + ", " + starCount);

        int parenthesesCount = leftParenthesesCount - rightParenthesesCount;

        if(parenthesesCount < 0){
            parenthesesCount += starCount;
            if(parenthesesCount >= 0) return true;
            else return false;
        }

        else if(parenthesesCount > 0){
            parenthesesCount -= starCount;
            if(parenthesesCount <= 0) return true;
            else return false;
        }
        
        return true;
    }

    public static void main(String[] args){

        // System.out.println(checkValidString("()"));
        // System.out.println(checkValidString("(*)"));
        // System.out.println(checkValidString("(*))"));
        System.out.println(checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"));

    }
}