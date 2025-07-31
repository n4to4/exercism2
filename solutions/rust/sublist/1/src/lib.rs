#[derive(Debug, PartialEq)]
pub enum Comparison {
    Equal,
    Sublist,
    Superlist,
    Unequal,
}

pub fn sublist<T: PartialEq>(xs: &[T], ys: &[T]) -> Comparison {
    match (is_sublist(xs, ys), is_sublist(ys, xs)) {
        (true, true) => Comparison::Equal,
        (true, false) => Comparison::Sublist,
        (false, true) => Comparison::Superlist,
        (false, false) => Comparison::Unequal,
    }
}

fn is_sublist<T: PartialEq>(xs: &[T], ys: &[T]) -> bool {
    for x in xs {
        if !ys.iter().any(|b| *x == *b) {
            return false;
        }
    }
    true
}
