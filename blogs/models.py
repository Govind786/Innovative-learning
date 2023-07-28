from django.db import models

# Create your models here.
class Music(models.Model):
    s_no = models.IntegerField(auto_created=True)
    music = models.FileField(upload_to='music/music_options/', blank=True)

    def __str__(self):
        return str(self.music)


class Suggest(models.Model):
    name = models.CharField(max_length=50, default="")
    email = models.CharField(max_length=50, default="")
    mass = models.CharField(max_length=90, default="")
    date = models.DateField(null=False)

    def __str__(self):
        return self.email