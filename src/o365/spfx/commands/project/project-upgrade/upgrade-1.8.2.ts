import { FN001001_DEP_microsoft_sp_core_library } from "./rules/FN001001_DEP_microsoft_sp_core_library";
import { FN001002_DEP_microsoft_sp_lodash_subset } from "./rules/FN001002_DEP_microsoft_sp_lodash_subset";
import { FN001003_DEP_microsoft_sp_office_ui_fabric_core } from "./rules/FN001003_DEP_microsoft_sp_office_ui_fabric_core";
import { FN001004_DEP_microsoft_sp_webpart_base } from "./rules/FN001004_DEP_microsoft_sp_webpart_base";
import { FN002001_DEVDEP_microsoft_sp_build_web } from "./rules/FN002001_DEVDEP_microsoft_sp_build_web";
import { FN002002_DEVDEP_microsoft_sp_module_interfaces } from "./rules/FN002002_DEVDEP_microsoft_sp_module_interfaces";
import { FN002003_DEVDEP_microsoft_sp_webpart_workbench } from "./rules/FN002003_DEVDEP_microsoft_sp_webpart_workbench";
import { FN001011_DEP_microsoft_sp_dialog } from "./rules/FN001011_DEP_microsoft_sp_dialog";
import { FN001012_DEP_microsoft_sp_application_base } from "./rules/FN001012_DEP_microsoft_sp_application_base";
import { FN001014_DEP_microsoft_sp_listview_extensibility } from "./rules/FN001014_DEP_microsoft_sp_listview_extensibility";
import { FN001013_DEP_microsoft_decorators } from "./rules/FN001013_DEP_microsoft_decorators";
import { FN010001_YORC_version } from "./rules/FN010001_YORC_version";
import { FN002009_DEVDEP_microsoft_sp_tslint_rules } from "./rules/FN002009_DEVDEP_microsoft_sp_tslint_rules";
import { FN001021_DEP_microsoft_sp_property_pane } from "./rules/FN001021_DEP_microsoft_sp_property_pane";
import { FN001005_DEP_types_react } from "./rules/FN001005_DEP_types_react";
import { FN001006_DEP_types_react_dom } from "./rules/FN001006_DEP_types_react_dom";
import { FN001022_DEP_office_ui_fabric_react } from "./rules/FN001022_DEP_office_ui_fabric_react";
import { FN002010_DEVDEP_microsoft_rush_stack_compiler_2_7 } from "./rules/FN002010_DEVDEP_microsoft_rush_stack_compiler_2_7";
import { FN002011_DEVDEP_microsoft_rush_stack_compiler_2_9 } from "./rules/FN002011_DEVDEP_microsoft_rush_stack_compiler_2_9";
import { FN020001_RES_types_react } from "./rules/FN020001_RES_types_react";
import { FN012017_TSC_extends } from "./rules/FN012017_TSC_extends";

module.exports = [
  new FN001001_DEP_microsoft_sp_core_library('1.8.2'),
  new FN001002_DEP_microsoft_sp_lodash_subset('1.8.2'),
  new FN001003_DEP_microsoft_sp_office_ui_fabric_core('1.8.2'),
  new FN001004_DEP_microsoft_sp_webpart_base('1.8.2'),
  new FN001005_DEP_types_react('16.7.22'),
  new FN001006_DEP_types_react_dom('16.8.0'),
  new FN001021_DEP_microsoft_sp_property_pane('1.8.2'),
  new FN001011_DEP_microsoft_sp_dialog('1.8.2'),
  new FN001012_DEP_microsoft_sp_application_base('1.8.2'),
  new FN001013_DEP_microsoft_decorators('1.8.2'),
  new FN001014_DEP_microsoft_sp_listview_extensibility('1.8.2'),
  new FN001022_DEP_office_ui_fabric_react('6.143.0'),
  new FN002001_DEVDEP_microsoft_sp_build_web('1.8.2'),
  new FN002002_DEVDEP_microsoft_sp_module_interfaces('1.8.2'),
  new FN002003_DEVDEP_microsoft_sp_webpart_workbench('1.8.2'),
  new FN002009_DEVDEP_microsoft_sp_tslint_rules('1.8.2'),
  new FN002010_DEVDEP_microsoft_rush_stack_compiler_2_7('', false),
  new FN002011_DEVDEP_microsoft_rush_stack_compiler_2_9('0.7.7', false),
  new FN010001_YORC_version('1.8.2'),
  new FN012017_TSC_extends('./node_modules/@microsoft/rush-stack-compiler-2.9/includes/tsconfig-web.json'),
  new FN020001_RES_types_react('16.7.22')
];