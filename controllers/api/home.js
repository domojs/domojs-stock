 module.exports={
    get:function(db, id, callback)
    {
		if(typeof(id)=='undefined')
		{
		    db.osort('stock:items', ['id', 'name'], function(err, result){
    	        if(err)
		            callback(500, err);
	            else
	                callback(200);
            });
		}
		else
		{
		    db.hgetall(id, function(err, result){
		        if(err)
		            callback(500, err);
	            else
	                callback(200);
            });
		}
    },
    hinc:function(db, id, quantity, callback){
        if(typeof(id)=='undefined')
        {
            db.hincrby(id, 'quantity', quantity || 1, function(err){
		        if(err)
		            callback(500, err);
	            else
	                callback(200);
            })
        }
    },
    hdec:function(db, id, quantity, callback){
        if(typeof(id)=='undefined')
        {
            db.hincrby(id, 'quantity', -quantity || -1, function(err){
		        if(err)
		            callback(500, err);
	            else
	                callback(200);
            })
        }
    }
};
 