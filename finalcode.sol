pragma solidity ^0.8.10;

contract  mobileContract{

        struct mobile {
           string imeinumber ;
           string supplyId ;
           string manufacturingId ;
           string retailId ;
           string currentinHandof   ;
           
           }

        struct supplyId{
            string org;
            string location;
            uint contact;
            uint Id;
           }
    
        struct manufacturingId {
               string company;
               string location;
               uint contact;
               uint Id;
            }

        struct retailId{
                string location;
                string name;
                uint contact;
                uint Id;
            }
        

        mapping (string => mobile) mobileMap ;
        mapping (string => supplyId) supplyMap ;
        mapping (string => manufacturingId) manufacturingMap;
        mapping (string => retailId) retailMap;


        function setManufacturingDetails (string memory _imeinumber,
                            string memory _currentinHandof,
                            string memory _manufacturingId
                            ) public {
                                mobileMap[_imeinumber].imeinumber = _imeinumber ;    
                                mobileMap[_imeinumber].currentinHandof = _currentinHandof ;
                                mobileMap[_imeinumber].manufacturingId = _manufacturingId ;

                            }

        function getManufacturingDetails (string memory _imeinumber) view public returns (string memory,
                                                                                          string memory,
                                                                                          string memory) {
                                                                                              return (mobileMap[_imeinumber].imeinumber,
                                                                                                      mobileMap[_imeinumber].currentinHandof,
                                                                                                      mobileMap[_imeinumber].manufacturingId);
                                                                                                         }

        function setSuppliersDetails( string memory _imeinumber, string memory _currentinHandof,string memory _supplyId) public {
             mobileMap[_imeinumber].imeinumber = _imeinumber  ;
             mobileMap[_imeinumber].currentinHandof = _currentinHandof ;
             mobileMap[_imeinumber].supplyId = _supplyId ;
        }

        function getSuppliersDetails (string memory _imeinumber) view public returns (string memory,
                                                                                      string memory,
                                                                                      string memory) {
                                                                                              return (mobileMap[_imeinumber].imeinumber,
                                                                                                      mobileMap[_imeinumber].currentinHandof,
                                                                                                      mobileMap[_imeinumber].supplyId);
                                                                                                         }

        function setRetailerDetails( string memory _imeinumber,string memory _currentinHandof, string memory _retailId) public {  
            mobileMap[_imeinumber].imeinumber = _imeinumber ;
            mobileMap[_imeinumber].currentinHandof = _currentinHandof ;
            mobileMap[_imeinumber].retailId = _retailId ;
      
        }

        function getRetailerDetails (string memory _imeinumber) view public returns (string memory,
                                                                                          string memory,
                                                                                          string memory) {
                                                                                              return (mobileMap[_imeinumber].imeinumber,
                                                                                                      mobileMap[_imeinumber].currentinHandof,
                                                                                                      mobileMap[_imeinumber].retailId);
                                                                                                         }

        function setmobile (string memory _imeinumber,
                           string memory _supplyId,
                           string memory _manufacturingId,
                           string memory _retailId,
                           string memory _currentinHandof) public {
                               mobileMap[_imeinumber].imeinumber= _imeinumber;
                               mobileMap[_imeinumber].supplyId= _supplyId;
                               mobileMap[_imeinumber].manufacturingId= _manufacturingId;
                               mobileMap[_imeinumber].retailId= _retailId;
                               mobileMap[_imeinumber].currentinHandof= _currentinHandof;
                           }


        function setsupplyId (string memory _org,
                           string memory _location,
                           uint _contact,
                           uint _Id) public {
                               supplyMap[_org].org= _org;
                               supplyMap[_org].location= _location;
                               supplyMap[_org].contact= _contact;
                               supplyMap[_org].Id= _Id;
                           }
        function setmanufacturingId (string memory _company,
                                     string memory _location,
                                     uint _contact,
                                     uint _Id ) public {
                                          manufacturingMap[_company].company= _company;
                                          manufacturingMap[_company].location= _location;
                                          manufacturingMap[_company].contact= _contact;
                                          manufacturingMap[_company].Id= _Id;
                                           }   

         function setretailId(string memory _location,
                              string memory _name,
                              uint _contact,
                              uint _Id ) public{
                                  retailMap[_name].location= _location;
                                  retailMap[_name].name= _name;
                                  retailMap[_name].contact= _contact;
                                  retailMap[_name].Id= _Id;
                              }                                           
        function getMobile (string memory _imeinumber) view public returns (string memory,
                                                                            string memory,
                                                                            string memory,
                                                                            string memory,
                                                                            string memory) {
                                                                                return (mobileMap[_imeinumber].imeinumber,
                                                                                        mobileMap[_imeinumber].supplyId,
                                                                                        mobileMap[_imeinumber].manufacturingId,
                                                                                        mobileMap[_imeinumber].retailId,
                                                                                        mobileMap[_imeinumber].currentinHandof);
                                                                            }
        function getsupplyId(string memory _org) view public returns(string memory,
                                                                     string memory,
                                                                     uint,
                                                                     uint) {
                                                                        return (supplyMap[_org].org,
                                                                              supplyMap[_org].location,
                                                                              supplyMap[_org].contact,
                                                                              supplyMap[_org].Id);   
                                                                     }                                                                    
 
    
        function getmanufacturingId(string memory _company) view public returns(string memory,string memory,uint,uint) {
             return(manufacturingMap[_company].company,
                    manufacturingMap[_company].location,
                    manufacturingMap[_company].contact,
                    manufacturingMap[_company].Id);
         }

         function getretailId(string memory _name) view public returns(string memory,string memory,uint,uint){
             return(retailMap[_name].location,
                    retailMap[_name].name,
                    retailMap[_name].contact,
                    retailMap[_name].Id);
         }              
}