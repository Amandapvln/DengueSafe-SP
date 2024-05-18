package com.safe.dengue.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.safe.dengue.entity.Morador;
import com.safe.dengue.service.MoradorService;

@RestController
@RequestMapping("/api/moradores")
public class MoradorController {
   
    @Autowired
    private MoradorService moradorService;

    @GetMapping
    public List<Morador> getAllMoradores() {
        return moradorService.getAllMoradores();
    }
     @GetMapping("/{id}")
    public Morador getMoradorById(@PathVariable Long id) {
        return moradorService.getMoradorById(id);
    }

    @PostMapping
    public Morador createMorador(@RequestBody Morador morador) {
        return moradorService.saveMorador(morador);
    }

    @PutMapping("/{id}")
    public Morador updateMorador(@PathVariable Long id, @RequestBody Morador morador) {
        morador.setIdMorador(id);
        return moradorService.saveMorador(morador);
    }

    @DeleteMapping("/{id}")
    public void deleteMorador(@PathVariable Long id) {
        moradorService.deleteMorador(id);
    }
}
