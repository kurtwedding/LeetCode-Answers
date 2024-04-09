public class TimeNeededToBuy {
    
    /**
     * Calculates the time (in turns) it takes for person in position k to buy all their tickets. 
     * @param tickets the array of tickets each person wishes to buy
     * @param k the position of the person
     * @return the time (in turns) it takes for person k to buy all their tickets
     */
    public static int timeRequiredToBuy(int[] tickets, int k){
        int count = 0;
        int i = 0;
        while (true) {
            if(tickets[i] > 0){
                tickets[i]--;
                count++;
            }
            i++;
            if(tickets[k] == 0){
                break;
            }
            i %= tickets.length;
        }
        return count;
    }

    public static void main(String[] args) {
        int[] arr = new int[]{2, 3, 2};
        System.out.println(timeRequiredToBuy(arr, 2));
    }
}
