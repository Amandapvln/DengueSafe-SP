package com.safe.dengue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.safe.dengue.entity.Caso;
import com.safe.dengue.repository.CasoRepository;

@Service
public class CasoService {
    @Autowired
        private CasoRepository casoRepository;

    public List<Caso> getAllCasos() {
        return casoRepository.findAll();
    }

    public Caso getCasoById(Long id) {
        return casoRepository.findById(id).orElse(null);
    }

    public Caso saveCaso(Caso caso) {
        return casoRepository.save(caso);
    }

    public void deleteCaso(Long id) {
        casoRepository.deleteById(id);
    }
}
