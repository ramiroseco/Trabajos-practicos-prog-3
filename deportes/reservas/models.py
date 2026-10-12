from django.db import models


class ActividadDeportiva(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    lugar = models.CharField(max_length=150)
    cupo = models.PositiveIntegerField()

    def __str__(self):
        return self.nombre


class Horario(models.Model):
    DIAS = [
        ('lunes', 'Lunes'),
        ('martes', 'Martes'),
        ('miercoles', 'Miércoles'),
        ('jueves', 'Jueves'),
        ('viernes', 'Viernes'),
        ('sabado', 'Sábado'),
        ('domingo', 'Domingo'),
    ]

    actividad = models.ForeignKey(
        ActividadDeportiva,
        on_delete=models.CASCADE,
        related_name='horarios',
    )
    dia = models.CharField(max_length=10, choices=DIAS)
    hora_inicio = models.TimeField()
    hora_fin = models.TimeField()

    def __str__(self):
        return f"{self.actividad.nombre} - {self.get_dia_display()} {self.hora_inicio}-{self.hora_fin}"


class Inscripcion(models.Model):
    ESTADOS = [
        ('Activa', 'Activa'),
        ('Cancelada', 'Cancelada'),
    ]

    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    dni = models.CharField(max_length=8)
    fecha_inscripcion = models.DateField(auto_now_add=True)
    estado = models.CharField(max_length=10, choices=ESTADOS, default='Activa')
    horario = models.ForeignKey(
        Horario,
        on_delete=models.CASCADE,
        related_name='inscripciones',
    )

    def __str__(self):
        return f"{self.apellido}, {self.nombre} ({self.estado})"