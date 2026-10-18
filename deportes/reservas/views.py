from django.contrib import messages
from django.shortcuts import render, redirect, get_object_or_404
from .models import ActividadDeportiva


def agregar_actividad(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre', '').strip()
        descripcion = request.POST.get('descripcion', '').strip()
        lugar = request.POST.get('lugar', '').strip()
        cupo = request.POST.get('cupo', '').strip()

        errores = []
        if not nombre:
            errores.append('El nombre es obligatorio.')
        if not lugar:
            errores.append('El lugar es obligatorio.')
        if not cupo.isdigit() or int(cupo) < 1:
            errores.append('El cupo debe ser un número entero mayor a 0.')

        if errores:
            for error in errores:
                messages.error(request, error)
            return render(request, 'reservas/agregar_actividad.html', {'datos': request.POST})

        ActividadDeportiva.objects.create(
            nombre=nombre,
            descripcion=descripcion,
            lugar=lugar,
            cupo=int(cupo),
        )
        messages.success(request, f'La actividad "{nombre}" se registró correctamente.')
        return redirect('reservas:agregar_actividad')

    return render(request, 'reservas/agregar_actividad.html')


def lista_actividades(request):
    actividades = ActividadDeportiva.objects.order_by('nombre')
    return render(request, 'reservas/lista_actividades.html', {
        'actividades': actividades,
    })


def detalle_actividad(request, pk):
    actividad = get_object_or_404(ActividadDeportiva, pk=pk)
    return render(request, 'reservas/detalle_actividad.html', {
        'actividad': actividad,
    })