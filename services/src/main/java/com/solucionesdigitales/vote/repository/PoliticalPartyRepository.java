package com.solucionesdigitales.vote.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.solucionesdigitales.vote.entity.PoliticalParty;

@RepositoryRestResource(collectionResourceRel = "politicalParty", path = "politicalParties")
public interface PoliticalPartyRepository extends MongoRepository<PoliticalParty, String>{

	List<PoliticalParty> findAllByStatus(int status);
	
	Optional<PoliticalParty>  findFirstByAcronymAndStatus(String acronym, int status);
}
