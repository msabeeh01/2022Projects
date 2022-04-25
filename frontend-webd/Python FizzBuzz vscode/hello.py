# for i in range(1, 101):
#     if i % 3 == 0 and i % 5 == 0:
#         print ('FizzBuzz')
#     elif i % 3 == 0:
#         print ('Fizz')
#     elif i % 5 == 0:
#         print ('Buzz')
#     else:
#         print (str(i))


class Dog:

    color = "black"
    name = "Yolo"

    def __init__(self,name,color):
        self.name = name
        self.color = color

    def func(self):
        print("My dog's name is ", self.name)
        print("His color is", self.color)
obj1 = Dog('Robert', 'white')

obj1.func()