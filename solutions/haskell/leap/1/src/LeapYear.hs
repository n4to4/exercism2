module LeapYear (isLeapYear) where

isLeapYear :: Integer -> Bool
isLeapYear year
    | notDivisibleBy 4 = False
    | notDivisibleBy 100 = True
    | notDivisibleBy 400 = False
    | otherwise = True
  where
    notDivisibleBy n = year `rem` n /= 0