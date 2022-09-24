import group1 from './Periodic-Table-Groups/group-1';
import group2 from './Periodic-Table-Groups/group-2';
import group3 from './Periodic-Table-Groups/group-3';
import group4 from './Periodic-Table-Groups/group-4';
import group5 from './Periodic-Table-Groups/group-5';
import group6 from './Periodic-Table-Groups/group-6';
import group7 from './Periodic-Table-Groups/group-7';
import group8 from './Periodic-Table-Groups/group-8';
import group9 from './Periodic-Table-Groups/group-9';
import group10 from './Periodic-Table-Groups/group-10';
import group11 from './Periodic-Table-Groups/group-11';
import group12 from './Periodic-Table-Groups/group-12';
import group13 from './Periodic-Table-Groups/group-13';
import group14 from './Periodic-Table-Groups/group-14';
import group15 from './Periodic-Table-Groups/group-15';
import group16 from './Periodic-Table-Groups/group-16';
import group17 from './Periodic-Table-Groups/group-17';
import group18 from './Periodic-Table-Groups/group-18';

// Types
import type { FieldsProps } from '../periodic-table/table-builder';

export const PeriodicTableBuilder: {fields: Array<FieldsProps | Array<FieldsProps>>} = {
  fields: [
    group1,
    group2,
    group3,
    group4,
    group5,
    group6,
    group7,
    group8,
    group9,
    group10,
    group11,
    group12,
    group13,
    group14,
    group15,
    group16,
    group17,
    group18,
  ],
};

export default PeriodicTableBuilder;
