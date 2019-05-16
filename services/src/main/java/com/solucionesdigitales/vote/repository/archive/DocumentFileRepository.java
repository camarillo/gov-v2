package com.solucionesdigitales.vote.repository.archive;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.solucionesdigitales.vote.entity.archive.DocumentFile;

public interface DocumentFileRepository extends MongoRepository<DocumentFile, String> {
	
	List<DocumentFile> findByStatusAndModuloodIdAndModuloodStatusOrderByFechaDesc(
			int status, String moduloodId, int moduloodStatus);
	
	List<DocumentFile> findByStatusAndModuloodIdAndModuloodStatusAndFechaBetweenOrderByFechaDesc(
			int status, String moduloodId, int moduloodStatus, Date dateStart, Date dateEnd);
	
}
