use std::collections::HashMap;

pub fn can_construct_note(magazine: &[&str], note: &[&str]) -> bool {
    let mut map = HashMap::new();
    for &word in magazine {
        let ent = map.entry(word).or_insert(0);
        *ent += 1;
    }

    for &word in note {
        let ent = map.entry(word).or_insert(0);
        if *ent <= 0 {
            return false;
        }
        *ent -= 1;
    }
    true
}
