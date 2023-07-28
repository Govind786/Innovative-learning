from django.db import models


# Create your models here.

class Home(models.Model):
    user_name = models.CharField(max_length=50, default="")
    user_img = models.ImageField(upload_to='user_img/dp/', default="")

    def __str__(self):
        return self.user_name


class Register(models.Model):
    user_id = models.AutoField
    user_name = models.CharField(max_length=50, default="")
    email = models.CharField(max_length=50, default="")
    password = models.CharField(max_length=16, default="")
    mob = models.IntegerField(default=0, null=True)
    date = models.DateField()

    def __str__(self):
        return self.user_name


class Contact(models.Model):
    user_id = models.AutoField
    user_name = models.CharField(max_length=50, default="")
    email = models.CharField(max_length=50, default="")
    mob = models.IntegerField(default=0)
    msg = models.CharField(max_length=80, default="")
    date = models.DateField(null=False)

    def __str__(self):
        return self.user_name
