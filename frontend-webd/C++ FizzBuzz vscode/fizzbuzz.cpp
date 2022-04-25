// C++ program to implement the FizzBuzz problem
#include <iostream>
using namespace std;
int main()
{
    for (int i = 1; i <= 100; i++)
    {
        // Numbers that are divisible by 3 and 5
        // are always divisible by 15
        // Therefore, "FizzBuzz" is printed in place of that number
        if (i % 3 && i % 5 == 0)
        {
            cout << "FizzBuzz"
                 << " ";
        }
        // "Fizz" is printed in place of numbers
        // that are divisible by 3
        else if ((i % 3) == 0)
        {
            cout << "Fizz"
                 << " ";
        }
        // "Buzz" is printed in place of numbers
        // that are divisible by 5
        else if ((i % 5) == 0)
        {
            cout << "Buzz"
                 << " ";
        }
        // If none of the above conditions are satisfied,
        // the number is printed
        else
        {
            cout << i << " ";
        }
    }
    return 0;
}