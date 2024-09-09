package com.JustDoIt.Mecca.LCM.service.impl;


import com.JustDoIt.Mecca.LCM.mapper.AdminMapper;
import com.JustDoIt.Mecca.LCM.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;

@Service
public class AdminServiceImpl implements AdminService {


    private AdminMapper mapper;

    public AdminServiceImpl() {}
    @Autowired
    public AdminServiceImpl(AdminMapper mapper) {
        this.mapper=mapper;
    }

    @Override
    public int reportid(String reportid, Timestamp reportdate) {

        int result = mapper.reportid(reportid,reportdate);
        return result;
    }
}
