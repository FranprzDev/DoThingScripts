import keyboard
import time

# Si encuentras un mapa donde por simplemente bailar te de experiencia,
# este script te servirá para poder subir de nivel mientras estes afk, solo debes dejar la PC
# con el script corriendo y el personaje bailará solo.

time.sleep(2)

while True:
    keyboard.press_and_release('b')
    time.sleep(0.1) 