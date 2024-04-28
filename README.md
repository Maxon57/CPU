# CPU_info_project

***
<details>
    <summary style="font-size: 16pt; font-weight: bold">Описание</summary>

Сайт позволяет вывести информацию о текущей загруженности
CPU. Данные выводятся из 100 последних записей. Так же имеется информация по
максимальному, минимальному и среднему значению CPU.

</details>

***
<details>
    <summary style="font-size: 16pt; font-weight: bold">Технологии</summary>

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=bal)
![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray)

</details>

***
<details>
    <summary style="font-size: 16pt; font-weight: bold">Запуск проекта</summary>

1. Скачайте на свою машину репозиторий с помощи команды:
   ```git clone https://github.com/Maxon57/CPU.git```
2. Перейдите в директорию ./CPU с помощи команды:
    ```cd ./CPU```
3. Сделайте миграции:
    ```
   python manage.py makemigartions
   python manage.py migrate
   ```
4. Выполните команду запуска сервера.
    ```
   python manage.py runserver <host>:<port>
   ```
5. Запустите клиент
    ```HOST=<HOST> PORT=<PORT> sh api_client.sh```
6. Перейдите по адресу.
    ``` http://<host>:<port>/```

</details>

## Автор
[Максим Игнатов](https://github.com/Maxon57)
