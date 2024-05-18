package com.safe.dengue.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.safe.dengue.entity.Caso;

public interface CasoRepository extends JpaRepository<Caso, Long>  {
    
}
