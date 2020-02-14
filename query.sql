create table projects
(
    id int identity(1,1) primary key,
    name varchar(50) default '',
    descriptions varchar(200) default '',
    scale int default 0,
    priority int default 0,
    period float default 0,
    team int not null,
    imgsrc varchar(200) default 'empty'
    constraint team_FK foreign key(team) references team(id)
)


create table types
(
    id int identity(1,1) primary key,
    types varchar(30) default ''
)

create table prj_types_bridge
(
    prjRef int not null,
    typesRef int not null,
    constraint prj_type_bridge_FK foreign key(prjRef) references projects(id),
    constraint types_prj_bridge_FK foreign key(typesRef) references types(id)
)

create table roles
(
    id int identity(1,1) primary key,
    role varchar(50) default ''
)

create table prj_roles_bridge
(
    prjRef int not null,
    rolesRef int not null,
    constraint prj_roles_bridge_FK foreign key(prjRef) references projects(id),
    constraint roles_prj_bridge_FK foreign key(rolesRef) references roles(id)
)

create table team 
(
    id int identity(1,1) primary key,
    team varchar(30) default 'individual'
)