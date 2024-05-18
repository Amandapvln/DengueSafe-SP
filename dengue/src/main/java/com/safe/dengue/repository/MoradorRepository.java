package com.safe.dengue.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.safe.dengue.entity.Morador;

public interface MoradorRepository extends JpaRepository<Morador, Long> {
    
}
