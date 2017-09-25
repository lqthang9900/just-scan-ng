import { Injectable } from '@angular/core';
import { Config } from '../config';
import app = require("application");
var Parse = require('../libs/parse.min');
@Injectable() 
export class ParseService{

    private liveQueryEvent: any = {};
    constructor(){
        Parse.initialize(Config.PARSE_APP_ID);
        Parse.serverURL = Config.PARSE_SERVER_URL;
       
    }

    init(){
        console.log(Parse);
    }

    query(className: string, where:any){
        if(!className || className == '') return false;
        var query = new Parse.Query(className);
        if(where)
            query = where(query);
        return query.find();
    }

    newQuery(classObj:any){
        var query = new Parse.Query(classObj);
        return query;
    }

    queryCount(className: string, where:any){
        if(!className || className == '') return false;
        var query = new Parse.Query(className);
        if(where)
            query = where(query);
        return query.count();
    }

    orQuery(className:string, returnFindPromise: boolean, customfunction:Function, ...queryFunctionList: any []){
        var queryObjList:any = [];
        var queryList = [...queryFunctionList];
        for(var i in queryList){
            var query = new Parse.Query(className);
            query = queryList[i](query);
            queryObjList.push(query);
        }
        var mainQuery = Parse.Query.or(...queryObjList);
        if(customfunction){
            mainQuery = customfunction(mainQuery);
        }
        if(returnFindPromise)
            return mainQuery.find();
        else return mainQuery;
    }

    extendObject(className: string){
        if(!className || className == '') return false;
        var ParseObj = Parse.Object.extend(className);
        return ParseObj;
    }

    newObject(className: string){
        if(!className || className == '') return false;
        var ParseObj = Parse.Object.extend(className);
        var parseObj = new ParseObj();
        return parseObj;
    }

    newUser(data: any){
        if(data) return new Parse.User(data);
        return new Parse.User();
    }

    setData(parseObj:any, data:any, save: boolean){
        for(var i in data){
            parseObj.set(i, data[i]);
        }
        if(save == true){
            return parseObj.save();
        }
        else
            return parseObj;
    }

    saveAll(objList:any){
        return Parse.Object.saveAll(objList);
    }

    parseFile(name: string, file: any, save: boolean){
        var parseFile = new Parse.File(name, file);
        if(save == true){
            return parseFile.save();
        }
        return parseFile;
    }

    currentUser(){
        return Parse.User.current();
    }

    fetchCurrentUser() {
        return Parse.User.current().fetch();
    }

    cloudTest(cloudName, params){
        return new Promise(function(resolve,reject){
            Parse.Cloud.run(cloudName, params,{
             sessionToken: Parse.User.current().get('sessionToken')
            })
            .then(function(res){
                console.log("aaaaaa");
            })
            .catch(function(err){
                console.log(err);
            })
        })
    }

    cloud(cloudName, params){
        return Parse.Cloud.run(cloudName, params,{
            sessionToken: Parse.User.current().get('sessionToken')
        });
    }

    cloudNoneOauth(cloudName, params){
        return Parse.Cloud.run(cloudName, params);
    }

    parse(): any{
        return Parse;
    }

    logIn(username, password) {
        return Parse.User.logIn(username.toLowerCase(), password);
    }

    logOut() {
        return Parse.User.logOut();
    }

    loginWith(authData: any, loginType: any) {
        Parse.User._registerAuthenticationProvider(authData);
        return Parse.User.logInWith(loginType, authData);
    }

    setLiveQueryEvent(className: any, type: any, eventName: any, event: any){
        if(!this.liveQueryEvent[className]) this.liveQueryEvent[className] = {};
        if(!this.liveQueryEvent[className][type]) this.liveQueryEvent[className][type] = {};
        this.liveQueryEvent[className][type][eventName] = event;
    }

    removeLiveQueryEvent(className: any, type: any, eventName: any){
        if(this.liveQueryEvent[className] && this.liveQueryEvent[className][type]){
            this.liveQueryEvent[className][type][eventName] = null;
        } 
    }

    subscribe(className: any, query: any, event: any){
        let subscription = query.subscribe();
        subscription.on('open', () => {
        });
        if(event){
            var self = this;
            if(event.create){
                subscription.on('create', (object: any) => {
                    for(var i in self.liveQueryEvent[className]['create']){
                        if(self.liveQueryEvent[className]['create'][i]) self.liveQueryEvent[className]['create'][i](object);
                    }
                });
            }
            if(event.update){
                subscription.on('update', (object: any) => {
                    for(var i in self.liveQueryEvent[className]['update']){
                        if(self.liveQueryEvent[className]['update'][i]) self.liveQueryEvent[className]['update'][i](object);
                    }
                });
            }
            if(event.enter){
                subscription.on('enter', (object: any) => {
                    for(var i in self.liveQueryEvent[className]['enter']){
                        if(self.liveQueryEvent[className]['enter'][i]) self.liveQueryEvent[className]['enter'][i](object);
                    }
                });
            }
            if(event.leave){
                subscription.on('leave', (object: any) => {
                    for(var i in self.liveQueryEvent[className]['leave']){
                        if(self.liveQueryEvent[className]['leave'][i]) self.liveQueryEvent[className]['leave'][i](object);
                    }
                });
            }
            if(event.delete){
                subscription.on('delete', (object: any) => {
                    for(var i in self.liveQueryEvent[className]['delete']){
                        if(self.liveQueryEvent[className]['delete'][i]) self.liveQueryEvent[className]['delete'][i](object);
                    }
                });
            }
            if(event.close){
                subscription.on('close', (object: any) => {
                    for(var i in self.liveQueryEvent[className]['close']){
                        if(self.liveQueryEvent[className]['close'][i]) self.liveQueryEvent[className]['close'][i](object);
                    }
                });
            }
        }
        return subscription;
    }

    unsubscribe(subscription: any){
        subscription.unsubscribe();
    }

    closeLiveQuery(){
        Parse.LiveQuery.close();
    }
    
    // newParseUser(id){
    //     if(app.android){
    //          var user = new ParseUser();
    //         user.setObjectId(id);
    //         return user;
           
    //     }else{
    //        var user =  new PFUser();
    //        user.objectId = id;
    //     //     user.id = id;
    //         return user;
    //     }
    // }
}
