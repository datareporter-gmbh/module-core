DataReporter Core Magento2 Module
============
 
 ![Magento 2](https://img.shields.io/badge/Magento-%3E=2.2-blue.svg)
 ![PHP >= 7.0.13](https://img.shields.io/badge/PHP-%3E=7.0.13-green.svg)


Core Magento2 module containing base containers for config and news

Installation
------------

The easiest way to install the extension is to use [Composer](https://getcomposer.org/).

Run the following commands:

- ```$ composer require datareporter/module-core```
- ```$ bin/magento module:enable DataReporter_Core```
- ```$ bin/magento setup:upgrade && bin/magento setup:static-content:deploy```

Features
-------------

### News
Currently there is a link to the news posted by www.datareport.eu

![alt newssection](docs/images/main_menu.png)

### Account Configuration

See ```Privacy -> Configuration``` or ```Stores -> Configuration -> DataReporter -> Settings -> General```

* ClientId, OrganisationId, WebsiteId: These values are provided by DataReporter for your account

![alt configuration](docs/images/configuration.png)

####Demo

Use following Demo-Credentials if you wanna try out the module, see ````Privacy -> Configuration````

* Client-Id: 33f002cc-2586-42b6-987d-548b2953c7b8
* Organisation-Id: R5spy6ZYDqA