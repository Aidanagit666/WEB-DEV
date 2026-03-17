from models import Device, Laptop, Smartphone

devices = []

n = int(input("How many devices do you want to create? "))

for i in range(n):
    print(f"\nDevice {i+1}")
    d_type = input("Enter type (device/laptop/smartphone): ").lower()

    brand = input("Enter brand: ")
    model = input("Enter model: ")
    power = int(input("Enter power (W): "))

    if d_type == "laptop":
        ram = int(input("Enter RAM (GB): "))
        device = Laptop(brand, model, power, ram)

    elif d_type == "smartphone":
        camera = int(input("Enter camera MP: "))
        device = Smartphone(brand, model, power, camera)

    else:
        device = Device(brand, model, power)

    devices.append(device)


for d in devices:
    print(d)
    print(d.turn_on())
    print(d.operate())

    if isinstance(d, Laptop):
        print(d.code())

    if isinstance(d, Smartphone):
        print(d.take_photo())

    print("------")