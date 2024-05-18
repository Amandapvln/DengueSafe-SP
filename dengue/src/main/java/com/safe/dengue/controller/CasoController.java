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

import com.safe.dengue.entity.Caso;
import com.safe.dengue.service.CasoService;

@RestController
@RequestMapping("/api/casos")
public class CasoController {
    
    @Autowired
    private CasoService casoService;

    @GetMapping
    public List<Caso> getAllCasos() {
        return casoService.getAllCasos();
    }

    @GetMapping("/{id}")
    public Caso getCasoById(@PathVariable Long id) {
        return casoService.getCasoById(id);
    }
    @PostMapping
    public Caso createCaso(@RequestBody Caso caso) {
        return casoService.saveCaso(caso);
    }

    @PutMapping("/{id}")
    public Caso updateCaso(@PathVariable Long id, @RequestBody Caso caso) {
        caso.setIdCaso(id);
        return casoService.saveCaso(caso);
    }

    @DeleteMapping("/{id}")
    public void deleteCaso(@PathVariable Long id) {
        casoService.deleteCaso(id);
    }
}
