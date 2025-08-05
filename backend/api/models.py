from django.db import models
from django.contrib.auth.models import User

class Note(models.Model):
    description = models.CharField(max_length=100)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='note')

    def __str__(self):
        return f'{self.id} note of: {self.owner.username}'