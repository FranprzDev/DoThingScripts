# Con este script puedes descargar cualquier video de YouTube en formato MP3
# Únicamente tienes que cambiar el link para ir variando el video.

# Importamos la librería de YouTube
from pytube import YouTube

# Pedimos el link del video
link = input("Inserta el link del video: ")

# Creamos el objeto de YouTube
yt = YouTube(link)

option = input("Ingrese 1 para descargar el video o 2 para descargar el audio: ")

if option == "1":
    print("Título: ", yt.title)
    print("Longitud del video: ", yt.length, "segundos")
    ys = yt.streams.get_highest_resolution()

    print("Descargando...")
    ys.download()
    print("Descarga completada.")
elif option == "2":
    print("Título: ", yt.title)
    print("Longitud del video: ", yt.length, "segundos")
    print("Descargando...")
    yt.streams.filter(only_audio=True).first().download()
    print("Descarga completada.")
else:
    print("Opción inválida.")