// https://app.codesignal.com/interview-practice/task/gX7NXPBrYThXZuanm
function removeKFromList(l, k) {
    while (l && l.value == k) {
        l = l.next;
    }

    let p = new ListNode();
    p.next = l;
    
    while (p.next) {
        if (p.next.value == k) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    
    return l;
}
