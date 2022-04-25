// See https://aka.ms/new-console-template for more information
int[] array = { 123, 42, 1234 };

// for (var i = 0; i < array.Length; i++)
// {
//     Console.WriteLine(array[i]);
// }


// int index = 0;

// foreach (int i in array)
// {
//     Console.WriteLine(i);
//     Console.WriteLine(index);
//     index++;
// }

// int bools = 0;
// while(bools < 2){
//     Console.WriteLine("My name is sabeeh");
//     bools++;
// }

otherClass.fizzBuzz();

class otherClass
{
    static string[] fizzy = {"Fizz", "Buzz", "FizzBuzz"};
    public static void fizzBuzz()
    {
        for (int i = 1; i <= 100; i++)
        {
            if (i % 3 == 0 && i % 5 == 0)
            {
                Console.WriteLine(fizzy[2]);
            }
            else if (i % 3 == 0)
            {
                Console.WriteLine(fizzy[0]);
            }
            else if (i % 5 == 0)
            {
                Console.WriteLine(fizzy[1]);
            }
            else
            {
                Console.WriteLine(i);
            }
        }
    }
}