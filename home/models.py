from django.db import models


class Client(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=20)
    message = models.CharField(max_length=2083)

