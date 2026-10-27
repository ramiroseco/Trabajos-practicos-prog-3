from django.contrib import admin
from .models import ActividadDeportiva, Horario, Inscripcion


@admin.register(ActividadDeportiva)
class ActividadDeportivaAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'lugar', 'cupo')
    search_fields = ('nombre', 'descripcion', 'lugar')


@admin.register(Horario)
class HorarioAdmin(admin.ModelAdmin):
    list_display = ('id', 'actividad', 'dia', 'hora_inicio', 'hora_fin')
    search_fields = ('actividad__nombre',)
    list_filter = ('dia',)


@admin.register(Inscripcion)
class InscripcionAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'nombre',
        'apellido',
        'dni',
        'fecha_inscripcion',
        'estado',
        'horario',
    )
    search_fields = ('nombre', 'apellido', 'dni')
    list_filter = ('estado', 'fecha_inscripcion')