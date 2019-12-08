package com.example.proyectointegrador;

public class Datos {
    int id;
    String nombre, apellido, documento,celular,foto,viajes,placa;

    public Datos(int id, String nombre, String apellido, String documento, String celular, String foto, String viajes, String placa) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.celular = celular;
        this.foto = foto;
        this.viajes = viajes;
        this.placa = placa;
    }

    public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getDocumento() {
        return documento;
    }

    public String getCelular() {
        return celular;
    }

    public String getFoto() {
        return foto;
    }

    public String getViajes() {
        return viajes;
    }

    public String getPlaca() {
        return placa;
    }
}

