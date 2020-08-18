NO_COLOR=\x1b[0m
INFO_COLOR=\x1b[94;01m
SUCCESS_COLOR=\x1b[32;01m
WARNING_COLOR=\x1b[33;01m
ERROR_COLOR=\x1b[31;01m

define SHOW_INFO
	@echo "${INFO_COLOR}$1${NO_COLOR}"
endef
define SHOW_SUCCESS
	@echo "${SUCCESS_COLOR}$1${NO_COLOR}"
endef
define SHOW_WARNINGS
	@echo "${WARNING_COLOR}$1${NO_COLOR}"
endef
define SHOW_ERROR
	@echo "${ERROR_COLOR}$1${NO_COLOR}"
endef


install:
	@yarn install

generate-env:
	@yarn run generate-env

generate-config:
	@yarn run generate-config

build:
	$(call SHOW_INFO, "Building Lighthouse CI Tools in '<PROJECT_ROOT>/lhci' Folder")
	make install && make generate-env && make generate-config

run:
	$(call SHOW_SUCCESS, "Running Lighthouse CI Test")
	@yarn run run-test

reset:
	$(call SHOW_ERROR, "Removing Auto Generated Files")
	@rm -rf .env
	@rm -rf .lighthouserc.js

clean: reset
	$(call SHOW_ERROR, "Clean All Dependencies")
	@rm -rf node_modules
	@rm -rf package-lock.json
