class Device:
    def __init__(self, brand, model, power):
        self.brand = brand
        self.model = model
        self.power = power

    def turn_on(self):
        return f"{self.brand} {self.model} is now ON."

    def operate(self):
        return f"{self.brand} {self.model} is operating."

    def __str__(self):
        return f"{self.brand} {self.model} ({self.power}W)"


class Laptop(Device):
    def __init__(self, brand, model, power, ram):
        super().__init__(brand, model, power)
        self.ram = ram

    def operate(self):
        return f"Laptop {self.brand} {self.model} is running programs."

    def code(self):
        return f"{self.brand} {self.model} is used for coding 💻"


class Smartphone(Device):
    def __init__(self, brand, model, power, camera_mp):
        super().__init__(brand, model, power)
        self.camera_mp = camera_mp

    def operate(self):
        return f"Smartphone {self.brand} {self.model} is being used."

    def take_photo(self):
        return f"{self.brand} {self.model} takes a {self.camera_mp}MP photo 📸"