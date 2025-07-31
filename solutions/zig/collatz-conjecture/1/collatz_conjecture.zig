pub fn steps(number: usize) anyerror!usize {
    return collatz(number, 0);
}

pub const ComputationError = error{
    IllegalArgument,
};

fn collatz(n: usize, count: usize) !usize {
    if (n == 0) {
        return ComputationError.IllegalArgument;
    }
    if (n == 1) {
        return count;
    }
    if (n % 2 == 0) {
        return collatz(n / 2, count + 1);
    } else {
        return collatz(3 * n + 1, count + 1);
    }
}
