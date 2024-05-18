package com.safe.dengue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.safe.dengue.entity.Morador;
import com.safe.dengue.repository.MoradorRepository;

@Service
public class MoradorService {
    @Autowired
        private MoradorRepository moradorRepository;
    public List<Morador> getAllMoradores() {
        return moradorRepository.findAll();
    }

    public Morador getMoradorById(Long id) {
        return moradorRepository.findById(id).orElse(null);
    }

    public Morador saveMorador(Morador morador) {
        return moradorRepository.save(morador);
    }

    public void deleteMorador(Long id) {
        moradorRepository.deleteById(id);
    }
    
}
